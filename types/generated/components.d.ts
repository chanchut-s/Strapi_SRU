import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationsEducation extends Schema.Component {
  collectionName: 'components_educations_educations';
  info: {
    displayName: 'education';
    icon: 'book';
    description: '';
  };
  attributes: {
    Education_Level: Attribute.Blocks;
    Aptitude: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'educations.education': EducationsEducation;
    }
  }
}
