import * as fs from 'fs'

export class File {
    
    public async read(filePath: string) : Promise<string> {
        let fileData = ""
        try {
            fileData = await fs.promises.readFile(filePath, 'utf-8')
        } catch (error) {
            console.log(error)
        }
        return fileData
    }

    public async write(filePath: string, data: string) : Promise<any> {
        await fs.promises.writeFile(filePath, data)
    }
}