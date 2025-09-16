import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'services/sitecore/component-props';
import { JSX } from 'react';

type DemocompProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Democomp = (props: DemocompProps): JSX.Element => (
  <div>
    <p>Democomp Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<DemocompProps>(Democomp);
