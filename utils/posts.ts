import path from 'path'
import fs from 'fs'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export async function getPostsList() {

    const fileNameList = fs.readdirSync(BLOG_FOLDER)
    console.log('list name:', fileNameList);

    for (const fileName of fileNameList) {
        const filePath = path.join(BLOG_FOLDER, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        console.log(fileName, '\n', fileContents)
    }

    return []
}