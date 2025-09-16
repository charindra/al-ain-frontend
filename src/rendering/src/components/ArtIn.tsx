import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ArtInProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const ArtIn = (props: ArtInProps): JSX.Element => (
  <div>
    <p>ArtIn Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<ArtInProps>(ArtIn);
