var INSPECTION_SHEET = {
    name: 'Inspection sheet',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Inspection sheet'),
    exportRange: {
        r1: 1,
        r2: 41,
        c1: ColumnNames.letterToColumn('A'),
        c2: ColumnNames.letterToColumn('E')
    },
    exportCheckboxCell: 'H6'
};

var DATA_VALID_SHEET = {
    name: 'DATA VALID',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DATA VALID'),
    mailData: {
        recipientAddressCell: 'N6',
        subjectCell: 'N7',
        messageCell: 'N8'
    },
    exportFolderIdCell:'J22'
};