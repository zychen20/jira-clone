import styled from "@emotion/styled";
import { Menu } from "antd";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { EpicScreen } from "screens/epic";
import { KanbanScreen } from "screens/kanban";

export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="kanban" element={<KanbanScreen />}></Route>
        <Route path="epic" element={<EpicScreen />}></Route>
        <Route index element={<KanbanScreen />} />
      </Routes>
    </div>
  );
};
