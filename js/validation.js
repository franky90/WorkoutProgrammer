function validateFileData(messagesStringCollection, file)
{
    const isValidFile = typeof file === 'object' && file !== null && typeof file.name === 'string' && file.name.length > 2
    const invalidFile = !isValidFile
    if(invalidFile) {
        messagesStringCollection.push('File Problem')
    }
}