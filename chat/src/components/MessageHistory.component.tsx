import {Message} from "./message.component";
import {Response} from "./response.component";
import {Typing} from "./typing.componnet";

export type Messages = {
    id: string;
    from: {name: string};
    type: string;
    time: string
    text?: string
}

export const MessageHistory = (props: {list: Messages[]}) => {
    return (
        <div className="chat-history">
            {
                props.list.map(chat => (
                    <ul style={{listStyleType: "none"}}>
                        {chat.type === 'message' ? <Message from={chat.from} message={{time: chat.time, text: chat.text}}/>
                            : chat.type === 'response' ? < Response from={chat.from} message={{time: chat.time, text: chat.text}} />
                                : < Typing  from={chat.from} message={{time: chat.time, text: chat.text}}/>}
                    </ul>
                ))
            }
        </div>

    )
}