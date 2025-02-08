import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
import { generateImageModelType } from "../../models/hf";

async function genImage(data: generateImageModelType): Promise<string> {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
            headers: {
                Authorization: `Bearer ${Bun.env.HF_TOKEN}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();

    const fileName = uuidv4();

    const file = new File([result], `${fileName}.png`);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filePath = `assets/${fileName}.png`;
    fs.writeFileSync(filePath, new Uint8Array(buffer));
    return filePath
}

export { genImage };