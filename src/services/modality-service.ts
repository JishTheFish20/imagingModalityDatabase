import {db} from '../connection'

export const getModalitys = async () => {
    return await db.query('SELECT * from scansused')
}

export async function getModalityByName(firstname: string){
    return await db.any(`SELECT * FROM scansused WHERE firstname = $1`, [firstname])
}

export const saveModality = async (modality: any) => {
    return await db.one('INSERT INTO scansused(firstname,lastname,time_stamp,xrayamount,mriamount,ctamount)'+
    'VALUES ($1,$2,$3,$4,$5,$6)',
    [modality.firstname, modality.lastname,modality.time_stamp,modality.xrayamount,modality.mriamount,modality.ctamount])
}

export const updateModality = async(firstname:string, modality: any) =>{
    return await db.one(`UPDATE scansused SET lastname = $1, time_stamp = $2, xrayamount = $3, mriamount = $4, ctamount = $5` +
    `WHERE firstname = $6`,
    [modality.lastname, modality.time_stamp, modality.xrayamount, modality.mriamount, modality.ctamount, firstname])
}