import React from 'react'
import styled from 'styled-components';

import { StyledHead, StyledNav, StyledHeadLogoWrapper, StyledHeadLogo, StyledHeadName, StyledUserInfo, StyledSubHead, StyledH1, StyledH2 } from '../../common/StyledComponents'
import Card from '../../components/Card'

const { Link } = require('../../routes')

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddSchedule = () => {
  return (
    <div>
      <StyledHead>
        <StyledNav>
          <Link to='/'>
            <StyledHeadLogoWrapper>
              <StyledHeadLogo />
              <StyledHeadName>MASH UP</StyledHeadName>
            </StyledHeadLogoWrapper>
          </Link>
        </StyledNav>
        <Link href="/">
          <StyledUserInfo>
            디자인 고은이
          </StyledUserInfo>
        </Link>
      </StyledHead>
      <StyledSubHead>
        <StyledH1>매쉬업 공지를 작성해주세요.</StyledH1>
        <StyledH2>매쉬업 전체회의/팀스터디/앱프로젝트 중 1가지를 골라 작성해주세요.</StyledH2>
      </StyledSubHead>
      <StyledCardWrapper>
        <Card isNew={true} />
      </StyledCardWrapper>
    </div>
  )
}

export default AddSchedule;
