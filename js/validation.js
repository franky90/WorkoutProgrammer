function validateFileData(messagesStringCollection, stateRef) {

    let isValid = true
    const file = stateRef.file
    if(file === null) return

    const isValidFile = typeof file === 'object' 
        && file !== null 
        && typeof file.size === 'number' && file.size/1024/1024 < 2

    // if we have an invalid file - invalidFile
    if(!isValidFile) {
        messagesStringCollection.push('Incorrect File Size')
        isValid = false
    }
    const re = /(\.jpg|\.jpeg|\.png)$/i
    // checking if file extension ends in one of the following...
    const fileName = file && file.name || ''
    const isValidFileExt = re.test(fileName)
    const isInvalidFileExt = !isValidFileExt
    if (isInvalidFileExt) {
        messagesStringCollection.push('Incorrect File Format')
        isValid = false
    }

    if(!isValid)
        resetFileInput()
}