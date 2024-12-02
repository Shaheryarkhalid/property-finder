'use server'
import fs from 'fs/promises'
export default async function SearchByKey<TProperty>(key: keyof TProperty, value: string) {
    const file = await fs.readFile('src/Data.json');
    const allProperties: TProperty[] = JSON.parse(file.toString());
    return allProperties.filter((property) => property[key] === value); 
}
