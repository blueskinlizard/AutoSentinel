import { PrismaClient } from '../generated/prisma/index.js'; 
const prisma = new PrismaClient();

export const findUserByName = async(username_param) =>{
    return await prisma.user.findUnique({
        where:{
            name: username_param
        }
    })
}
export const findUserById = async(identification_param) =>{
    return await prisma.user.findUnique({
        where: {
            name: identification_param
        }
    })
}
export const createNewUser = async(username_param, hashed_password_param) =>{
    return await prisma.user.create({
        data:{
            name: username_param,
            password: hashed_password_param
        }
    })
}
export const deleteIncident = async(identification_param) =>{
    return await prisma.incident.delete({
        where:{
            id: identification_param
        }
    })
}
export const createIncident = async(incidentOject_param, incidentData_param) =>{
    return await prisma.incident.create({
        data:{
            imagedata: incidentData_param,
            incidentConfidence: incidentOject_param.confidence,
            incidentCoords: incidentOject_param.bbox
        }
    })
}
export const createDashboard = async(dashboardName_param) =>{
    return await prisma.dashboard.create({
        data:{
            name: dashboardName_param
        }
    })
}