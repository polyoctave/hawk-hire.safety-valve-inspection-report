function exportSheet(sheet){
    var fileName = "Saftey Valve Inspection Report";

    var exportFolderId = DATA_VALID_SHEET.sheet.getRange(DATA_VALID_SHEET.exportFolderIdCell).getValue();

    var exportOptions = {
        exportFolderId: exportFolderId,
        sheetId: sheet.sheet.getSheetId(),
        exportFileName: fileName,
        range: sheet.exportRange
    };
    var pdfFile = ExportSpreadsheet.export(exportOptions);
    sendEmail(sheet, pdfFile);
}

function exportInspectionSheet(){
    return exportSheet(INSPECTION_SHEET);
}

// Just added to automate email when saving as PDF
function sendEmail(sheet, attachment) {
    var emailData = DATA_VALID_SHEET.mailData;
    var recipient = DATA_VALID_SHEET.sheet.getRange(emailData.recipientAddressCell).getValue();
    var subject = DATA_VALID_SHEET.sheet.getRange(emailData.subjectCell).getValue();
    var message = DATA_VALID_SHEET.sheet.getRange(emailData.messageCell).getValue();
    var emailOptions = {
        attachments: [attachment.getAs(MimeType.PDF)],
        name: 'Automatic valve inspection form mail sender'
    };
    sendEmailAux(recipient, subject, message, emailOptions);
}

// Send an email
function sendEmailAux(recipient, subject, message, emailOptions) {
    try {
        // do stuff, including send email
        MailApp.sendEmail(recipient, subject, message, emailOptions);
    } catch(e) {
        Logger.log("Error with email. Recipient " + recipient + " maybe is not a valid email address", e);
    }
}
