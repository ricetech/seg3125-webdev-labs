import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";

import { Restrictions } from "../../enums/restrictions";

import './_lab2-preferences.scss';

interface Lab2PreferencesPageProps {
  preferences: Restrictions[];
  setPreferences: React.Dispatch<React.SetStateAction<Restrictions[]>>;
}

export const Lab2PreferencesPage = (props: Lab2PreferencesPageProps) => {
  return (
    <>
      Preferences
    </>
  );
}
