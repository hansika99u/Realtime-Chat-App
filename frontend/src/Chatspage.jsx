// Correct import statement
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";


const ChatsPage= (props)=>{
    const chatProps = useMultiChatLogic(
        'a4129392-3d44-4ed1-979c-7825c5f48253',
         props.user.username, 
         props.user.secret
         );
    return (
    <div style= {{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style= {{height: '100%'}}/>

    </div>
    )

}
export default ChatsPage;