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
            id: identification_param
        }
    })
}
export const createNewUser = async(username_param, hashed_password_param) =>{
    await prisma.user.create({
        data:{
            name: username_param,
            password: hashed_password_param
        }
    })
}
export const deleteIncident = async(identification_param) =>{
    await prisma.incident.delete({
        where:{
            id: identification_param
        }
    })
}
export const createIncident = async(incidentOject_param, incidentData_param, dashboardIdentification_param) =>{
    await prisma.incident.create({
        data:{
            imageData: incidentData_param,
            incidentConfidence: incidentOject_param.confidence,
            incidentCoords: incidentOject_param.bbox,
            dashboardId: dashboardIdentification_param
        }
    })
}
export const createDashboard = async(dashboardName_param, identification_param) =>{
    await prisma.dashboard.create({
        data:{
            name: dashboardName_param,
            dashboardOwnerId: identification_param
        }
    })
}

export const fetchDashboard = async(dashboardIdentification_param) =>{ 
    //dashboard identification not user identification
    return await prisma.dashboard.findUnique({
        where:{
            id: dashboardIdentification_param
        },
        select:{
            IncidentCollection: true,
            DashboardViewers: true
        }
    })
}

export const fetchUserDashboards = async(identification_param) =>{
    //User id for identification_param, returns all dashboards under specific user
    return await prisma.dashboard.findMany({
        where:{
            dashboardOwnerId: identification_param
        }
    })
}

export const fetchIncident = async(identification_param) =>{
    return await prisma.incident.findUnique({
        where: {id: identification_param}
    })
}

export const deleteDashboard = async(dashboardIdentification_param) =>{
    await prisma.incident.deleteMany({
        where: {
            dashboardId: dashboardIdentification_param   
        }
    })
    await prisma.dashboard.delete({
        where:{
            id: dashboardIdentification_param
        }
    })
}

export const fetchSharedDashboards = async(identification_param) =>{
    return await prisma.dashboardRecipients.findMany({
        where:{
            userId: identification_param
        }
    })
}