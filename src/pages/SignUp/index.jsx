import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Desktop, Laptop, Tablet } from '../../styles/MediaQuery';
import hiddenEye from '../../assets/Images/HiddenEye.png';
import showEye from '../../assets/Images/ShowEye.png';

export const SignUp = () => {
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordCheckVisible, setPasswordCheckVisible] = useState(false);

    const clickPasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    }
    const clickPasswordCheckVisible = () => {
        setPasswordCheckVisible(!passwordCheckVisible);
    }

    const clickVerify = () => {
        // 입력 정보 유효성 검사하기

        navigate('/signup/verify');
        // 인증하기 버튼 클릭
    }

    return (
        <>
        <Desktop>
        <Body>
        <Container>
            <SignUpBox>
            <InputText>이름 *</InputText>
            <Input type="text" placeholder="이름 입력"></Input>
            <InputText>이메일 *</InputText>
            <Input type="email" placeholder="cardify@example.com"></Input>
            <InputText>비밀번호 *</InputText>
            <PWDiv>
            <PasswordInput type={passwordVisible? "text" : "password"} placeholder="비밀번호 입력">
            </PasswordInput>
            <EyeDiv>
            {passwordVisible? <ShowEye onClick={()=>clickPasswordVisible()}></ShowEye> :
            <HiddenEye onClick={()=>clickPasswordVisible()}></HiddenEye>
            }
            </EyeDiv>
            </PWDiv>
            
            <InputText>비밀번호 확인 *</InputText>
            <PWDiv>
            <PasswordCheckInput type={passwordCheckVisible? "text" : "password"} placeholder="비밀번호 확인">
            </PasswordCheckInput>
            {passwordCheckVisible? <EyeDiv><ShowEye onClick={()=>clickPasswordCheckVisible()}/></EyeDiv> :
            <EyeDiv><HiddenEye onClick={()=>clickPasswordCheckVisible()}/></EyeDiv>
            }
            </PWDiv>

            <SignUpDiv>
                <AgreeText>
                    <AgreeContent onClick={()=>navigate('/signup')}>이용약관</AgreeContent>
                    <p>과 &nbsp;</p>
                    <AgreeContent onClick={()=>navigate('/signup')}>개인정보취급방침</AgreeContent>
                    <p>을 확인하고, 동의합니다.</p>
                </AgreeText>
            </SignUpDiv>

            <VerifyButton onClick={()=>clickVerify()}>동의하고 인증하기</VerifyButton>
            </SignUpBox>
        </Container>
        </Body>
        </Desktop>

        <Laptop>
        <Body>        <Container>
            <SignUpBox>
            <InputText>이름 *</InputText>
            <Input type="text" placeholder="이름 입력"></Input>
            <InputText>이메일 *</InputText>
            <Input type="email" placeholder="cardify@example.com"></Input>
            <InputText>비밀번호 *</InputText>
            <PWDiv>
            <PasswordInput type={passwordVisible? "text" : "password"} placeholder="비밀번호 입력">
            </PasswordInput>
            <EyeDiv>
            {passwordVisible? <ShowEye onClick={()=>clickPasswordVisible()}></ShowEye> :
            <HiddenEye onClick={()=>clickPasswordVisible()}></HiddenEye>
            }
            </EyeDiv>
            </PWDiv>
            
            <InputText>비밀번호 확인 *</InputText>
            <PWDiv>
            <PasswordCheckInput type={passwordCheckVisible? "text" : "password"} placeholder="비밀번호 확인">
            </PasswordCheckInput>
            {passwordCheckVisible? <EyeDiv><ShowEye onClick={()=>clickPasswordCheckVisible()}/></EyeDiv> :
            <EyeDiv><HiddenEye onClick={()=>clickPasswordCheckVisible()}/></EyeDiv>
            }
            </PWDiv>

            <SignUpDiv>
                <AgreeText>
                    <AgreeContent onClick={()=>navigate('/signup')}>이용약관</AgreeContent>
                    <p>과 &nbsp;</p>
                    <AgreeContent onClick={()=>navigate('/signup')}>개인정보취급방침</AgreeContent>
                    <p>을 확인하고, 동의합니다.</p>
                </AgreeText>
            </SignUpDiv>

            <VerifyButton onClick={()=>clickVerify()}>동의하고 인증하기</VerifyButton>
            </SignUpBox>
        </Container>
        </Body>
        </Laptop>

        <Tablet>
        <Body>        <Container>
            <SignUpBox>
            <InputText>이름 *</InputText>
            <Input type="text" placeholder="이름 입력"></Input>
            <InputText>이메일 *</InputText>
            <Input type="email" placeholder="cardify@example.com"></Input>
            <InputText>비밀번호 *</InputText>
            <PWDiv>
            <PasswordInput type={passwordVisible? "text" : "password"} placeholder="비밀번호 입력">
            </PasswordInput>
            <EyeDiv>
            {passwordVisible? <ShowEye onClick={()=>clickPasswordVisible()}></ShowEye> :
            <HiddenEye onClick={()=>clickPasswordVisible()}></HiddenEye>
            }
            </EyeDiv>
            </PWDiv>
            
            <InputText>비밀번호 확인 *</InputText>
            <PWDiv>
            <PasswordCheckInput type={passwordCheckVisible? "text" : "password"} placeholder="비밀번호 확인">
            </PasswordCheckInput>
            {passwordCheckVisible? <EyeDiv><ShowEye onClick={()=>clickPasswordCheckVisible()}/></EyeDiv> :
            <EyeDiv><HiddenEye onClick={()=>clickPasswordCheckVisible()}/></EyeDiv>
            }
            </PWDiv>

            <SignUpDiv>
                <AgreeText>
                    <AgreeContent onClick={()=>navigate('/signup')}>이용약관</AgreeContent>
                    <p>과 &nbsp;</p>
                    <AgreeContent onClick={()=>navigate('/signup')}>개인정보취급방침</AgreeContent>
                    <p>을 확인하고, 동의합니다.</p>
                </AgreeText>
            </SignUpDiv>

            <VerifyButton onClick={()=>clickVerify()}>동의하고 인증하기</VerifyButton>
            </SignUpBox>
        </Container>
        </Body>
        </Tablet>
        </>
    )
}

export default SignUp;

const Body = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
background: #EDEDED;
    `;

const Container = styled.div`
width: 72rem;
height: 47.5rem;
flex-shrink: 0;
background: #FFF;
box-shadow: 0px 4px 26.7px 0px rgba(0, 0, 0, 0.02), 0px 10px 60px 0px rgba(0, 74, 162, 0.03);
@media (max-width: 1440px) {
    width: 65rem;
    height: 45rem;
}
@media (max-width: 1024px) {
    width: 61rem;
    height: 42.5rem;
}
`;

const SignUpBox = styled.div`
margin: 6.25rem 19rem 0 19rem;
position: relative;
@media (max-width: 1440px) {
    margin: 6rem 16rem 0 16rem;
}
@media (max-width: 1024px) {
    margin: 4rem 16rem 0 16rem;
}
`;

const InputText = styled.p`
color: #000;
/* 16 Medium */
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 1.5rem;
`;

const Input = styled.input`
display: flex;
width: 34rem;
padding: 0.875rem 1rem;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border: 1px solid #D9D9D9;
background: #FFF;
/* 16 Medium */
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
box-sizing: border-box;
&::placeholder {
    color: var(--B1B1B1, #B1B1B1);
    }

&:focus {
outline: none;
border: 1px solid #699BF7;
background: #FFF;
}
@media (max-width: 1440px) {
    width: 33rem;
}
@media (max-width: 1024px) {
    width: 29rem;
}
`;

const PasswordInput = styled(Input)`
    `;

const PasswordCheckInput = styled(Input)`
    margin-bottom:0;
    `;

const PWDiv = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    `;

const EyeDiv = styled.div`
    display: flex;
    position: absolute;
    right: 1rem;
        &:hover {
        cursor: pointer;
        }
    `;

const ShowEye = styled.div`
background-image: url(${showEye});
background-size: cover;
    background-position: center;
    width: 1.4rem;
    height: 1.4rem;

    `;
const HiddenEye = styled(ShowEye)`
background-image: url(${hiddenEye});
    `;

const SignUpDiv = styled.div`
    display: flex;
    margin-top: 2rem;
    `;

const AgreeText = styled.div`
display: flex;
    color: var(--B1B1B1, #B1B1B1);
/* 16 Medium */
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
    `;

    const AgreeContent = styled.p`
color: #1062FE;
text-decoration-line: underline;
&:hover {
    cursor: pointer;
    }
    `;

    const VerifyButton = styled.button`
    display: flex;
    width: 34rem;
    padding: 1rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #D9D9D9;
    background: #FFF;
    color: var(--Black, #1F1F1F);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:hover {
        cursor: pointer;
        }
    margin-top: 0.5rem;
    @media (max-width: 1440px) {
        width: 33rem;
    }
    @media (max-width: 1024px) {
        width: 29rem;
    }
`;