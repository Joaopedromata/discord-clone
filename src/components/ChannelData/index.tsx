import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current;
    
        if (div) {
          div.scrollTop = div.scrollHeight;
        }
      }, [messagesRef]);

    return (
        <Container>
          <Messages ref={messagesRef}>
            {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage
                    key={n}
                    author="João Pedro Mata"
                    date="22/06/2020"
                    content="Esta aplicação é um estudo de CSS Grid"
                />
            ))}
          

            <ChannelMessage
                author="Gabriela Rodrigues"
                date="22/06/2020"
                content={
                    <>
                    <Mention>@João Pedro Mata</Mention>, me carrega no LoL e CS de novo
                    por favor?
                    </>
                }
                hasMention
                isBot
            />

          </ Messages>  
          
          
          <InputWrapper>
              <Input type="text" placeholder="Conversar #chat-livre"/>
              <InputIcon />
          </InputWrapper>
        </Container>
    )
}

export default ChannelData