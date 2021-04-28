import React from 'react'
import s from './Message.module.css'

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageDataType) {
    return (
        <div>
            <div className={s.workArea}>

                <div className={s.imgArea}>
                <img className={s.avatar} src={props.avatar}/>
                </div>

                <div className={s.messageArea}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>

                </div>
            </div>
        </div>
    )
}

export default Message
