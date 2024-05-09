import { OrganizationList } from '@clerk/nextjs';
import React from 'react';

export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/organization/:id"
      afterSelectOrganizationUrl="/organization/:id"
    />
  );
}
