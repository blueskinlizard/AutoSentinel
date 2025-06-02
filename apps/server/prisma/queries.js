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
    return await prisma.user.create({
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
export const createIncident = async(incidentObject_param, incidentData_param, dashboardIdentification_param) =>{
    await prisma.incident.create({
        data:{
            imageData: incidentData_param,
            incidentConfidence: incidentObject_param.confidence,
            incidentCoords: incidentObject_param.bbox,
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
        include:{
            IncidentCollection: true,
            DashboardShare: true
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

export const fetchSharedDashboardIds = async(identification_param) =>{
    return await prisma.dashboardRecipient.findMany({
        where:{
            userId: identification_param
        }
    })
}

export const createSharedDashboard = async(identification_param, dashboardIdentification_param, recipientIdentification_param) =>{
    const createdDashboardShare = await prisma.dashboardShare.create({
        data:{
            dashboardId: dashboardIdentification_param,
            sharerId: identification_param
        },
    })
    await prisma.dashboardRecipient.create({
        data:{
            dashboardShareId: createdDashboardShare.id,
            userId: recipientIdentification_param
        }
    })
}

export const fetchSharedDashboards = async(dashboardShare_identification_param) =>{
    await prisma.dashboardShare.findFirst({
        where:{
            id: dashboardShare_identification_param
        }
    })
}

export const fetchLatestIncident = async(dashboardIdentification_param) =>{
    return await prisma.dashboard.findUnique({
        where: {
            id: dashboardIdentification_param
        },
        include: {
            IncidentCollection: {
                orderBy: { dateCreated: `desc` },
                take: 1
            }
        }
    })
}