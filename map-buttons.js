function onOpen() {
    INSPECTION_SHEET.sheet.getRange(INSPECTION_SHEET.exportCheckboxCell).setValue(false);
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Run scripts')
        .addItem('Export ' + INSPECTION_SHEET.name, 'exportInspectionSheet')
        .addItem('Authorize scripts to access Google drive from smartphone', 'createInstallableTriggers')
        .addToUi();
}

function createInstallableTriggers(){
    deleteAllTriggers();
    ScriptApp.newTrigger('installableOnEdit')
        .forSpreadsheet(SpreadsheetApp.getActive())
        .onEdit()
        .create();
}

function installableOnEdit(e){
    var range = e.range;
    if(range.getSheet().getName() === INSPECTION_SHEET.sheet.getRange(INSPECTION_SHEET.exportCheckboxCell).getSheet().getName()
        && range.getA1Notation() === INSPECTION_SHEET.sheet.getRange(INSPECTION_SHEET.exportCheckboxCell).getA1Notation()
        && range.getValue() === true) {
        range.setValue(false);
        exportInspectionSheet();
    }
}

function deleteAllTriggers() {
    var allTriggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < allTriggers.length; i++) {
        ScriptApp.deleteTrigger(allTriggers[i]);
    }
}
