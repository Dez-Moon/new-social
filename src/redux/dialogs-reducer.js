const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Alex', status: 'online', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX08-BGas-4KN1WEJqeEFosoBs7icfIGBrmPlDx2_7lb1JPrOxJDS6TKg6pdfdWvdBT2I&usqp=CAU" },
        { id: 2, name: 'Liudmila', status: 'online', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo_tVup127g3nlJQlRhztSvs-VDMOV6gdog&usqp=CAU" },
        { id: 3, name: 'Dima', status: 'online', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmNn-McJHGqip7O9wm4LsWjYxm-66fE5U6g&usqp=CAU" },
        { id: 4, name: 'Sveta', status: 'online', img: "https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.6435-9/121459506_174825017597278_7254467323943142098_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mDWdES0tvvUAX9ZMmvE&_nc_ht=scontent.fhrk1-1.fna&oh=00_AT-vgq4QjQJcBtrFo9EH9KnnVo60-Wriot8JazrGaTznRg&oe=6266AD87" },
        { id: 5, name: 'Bogdan', status: 'online', img: "https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.6435-9/83234941_624292938389462_3372191180157616128_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-5&_nc_sid=e007fa&_nc_ohc=h4chL3VGymgAX8p0kZN&_nc_ht=scontent.fhrk1-1.fna&oh=00_AT8NpQMFuQ6mmjQPGT6_mhMtUcM-YrXuxydoxO2t9E7crg&oe=62653348"},
        { id: 6, name: 'Lena', status: 'online', img: "https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.6435-9/90997136_106790764304537_3680647180076449792_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=108&ccb=1-5&_nc_sid=110474&_nc_ohc=0YrDCC7qSVgAX8detN5&_nc_ht=scontent.fhrk1-1.fna&oh=00_AT-uSZLIIWmi3nTg300o2Q-8K0QzfjHdBkqEzSutOnnR3A&oe=62652F72" },
        { id: 7, name: 'Artur', status: 'online', img: "https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.18169-9/11021143_783246245064311_5172636351328962548_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=9267fe&_nc_ohc=geMbOWT3S5UAX9KnsWV&_nc_ht=scontent.fhrk1-1.fna&oh=00_AT-LT_YFCXPq0yxeJ2fbodtcxpDBTTr7ZYZp-D4klQ0Nog&oe=6266768F" },
        { id: 8, name: 'Stepan', status: 'online', img: "https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.6435-9/121516740_140608354434719_6837241831021879467_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=101&ccb=1-5&_nc_sid=85a577&_nc_ohc=f0CtfyKr8NoAX9YKjos&_nc_ht=scontent.fhrk1-1.fna&oh=00_AT87uueMBdCi9CwDM754d1olVjOc72M_f1q6ooLnd0GANA&oe=6268BEDA" },
        { id: 9, name: 'Alexey', status: 'online', img: "https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.6435-9/81658368_980815628965269_5022903959921098752_n.jpg?stp=cp0_dst-jpg_e15_p640x640_q65&_nc_cat=103&ccb=1-5&_nc_sid=2d5d41&_nc_ohc=eq8WotBCjTIAX-c948j&_nc_ht=scontent.fhrk1-1.fna&oh=00_AT_mPwN_kulDUxRNfY9JU4l-wFg63P3fKdqzsPs8Qcpq6Q&oe=6268DF07" },
        { id: 10, name: 'Ivan', status: 'online', img: "https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.6435-9/104493117_112429813845497_8004540257248660539_n.jpg?stp=cp0_dst-jpg_e15_p640x640_q65&_nc_cat=105&ccb=1-5&_nc_sid=85a577&_nc_ohc=ubGUm1U04JgAX-ohkgI&_nc_ht=scontent.fhrk1-1.fna&oh=00_AT-IJbOEZHINHIDeR1fuIS6abRt06R_wQxN_o3TaFeB3Iw&oe=626634CF" },
    ],
    messages: [],
}
const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}]
            };
        }
        default: 
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;