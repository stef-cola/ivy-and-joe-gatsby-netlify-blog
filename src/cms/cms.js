import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import TestPagePreview from './preview-templates/TestPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('test', TestPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
