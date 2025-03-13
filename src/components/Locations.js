// src/components/Locations.js
import React from 'react';
import styled from 'styled-components';

const LocationsSection = styled.section`
  padding: 4rem 2rem;
  background: #f1f1f1;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const LocationsGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const LocationCard = styled.div`
  flex: 1;
  max-width: 300px;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const City = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export default function Locations() {
  return (
    <LocationsSection id="locations">
      <Title>Where We Operate</Title>
      <LocationsGrid>
        <LocationCard>
          <City>Lahore</City>
        </LocationCard>
        <LocationCard>
          <City>Karachi</City>
        </LocationCard>
        <LocationCard>
          <City>Islamabad</City>
        </LocationCard>
      </LocationsGrid>
    </LocationsSection>
  );
}
