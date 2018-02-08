import React from 'react';
import { TestPageTemplate } from '../../templates/test-page';

const TestPagePreview = ({ entry, widgetFor }) => (
  <TestPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default TestPagePreview;
