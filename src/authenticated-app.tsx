import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Header>
        <LeftHeader>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </LeftHeader>
        <RightHeader>
          <button onClick={logout}>登出</button>
        </RightHeader>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </div>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: row;
  height: 6rem;
  align-items: center;
  justify-content: space-between;
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightHeader = styled.div``;

const Main = styled.main`
  height: calc(100vh - 6rem);
`;
