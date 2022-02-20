import React, { useState } from 'react'
import styled from 'styled-components'

export default function PostModal() {

    const [editorText, setEditorText] = useState('')

    return (
        <Container>
            <Content>
                <Headers>
                    <h2>Create a post</h2>
                    <button>
                        <img src="/images/close.png" alt="" />
                    </button>
                </Headers>
                <SharedContent>
                    <UserInfo>
                        <img src="/images/user.svg" alt="" />
                        <span>Name</span>
                    </UserInfo>
                    <Editor>

                        <textarea value={editorText}
                            placeholder="What do you want to talk about?"
                            autoFocus={true}
                            onChange={e => { setEditorText(e.target.value) }}>

                        </textarea>

                    </Editor>

                </SharedContent>
                <ShareCreation>
                    <AttatchAssets>
                        <AssetButton>
                            <img src="/images/image-share.png" alt="" />
                        </AssetButton>

                        <AssetButton>
                            <img src="/images/video-share.png" alt="" />
                        </AssetButton>
                    </AttatchAssets>
                    <ShareComment>
                        <AssetButton>
                            <img src="/images/commnet.png" alt="" />
                            Anyone
                        </AssetButton>
                    </ShareComment>

                    <PostButton>
                        Post
                    </PostButton>
                </ShareCreation>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: black;
    z-index: 9999;
    background-color: rgba(0,0,0,0.8);
`;


const Content = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`;


const Headers = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        color: rgba(0,0,0,0.15);

        img{
            width: 20px;
        }
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`;


const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;

    img{
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }

    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const AttatchAssets = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
`;


const AssetButton = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    max-width: auto;
    color: rgba(0,0,0,0.5);
    border: 1px solid rgba(0,0,0,0.5);
    padding: 5px;
    background-color: #ccc;
    img{
        width: 35px;
    }
`;

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);
`;

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: #0a66c2;
    color: white;

    &:hover{
        background: #004182;
    }
`;


const Editor = styled.div`
    padding: 12px 24px;

    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;