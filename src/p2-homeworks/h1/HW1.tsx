import React from 'react'
import Message from './Message';
import {MessageDataType} from './Message';


function HW1() {

    const messageData = {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: 'some text',
        time: '22:00',
    }

    return (
        <div>
            <Message avatar={messageData.avatar} name='Artem' message='npm start нажимал?' time='22:00'/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
        </div>
    )
}

export default HW1
