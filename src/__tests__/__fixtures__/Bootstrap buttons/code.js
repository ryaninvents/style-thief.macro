import Thief from '../../style-thief.macro';
import styled from 'styled-components';
import { Button as UnstyledButton } from 'reactstrap';

const Bootstrap = Thief.require(
  'bootstrap/dist/css/bootstrap.css'
).preserveClassNames();

export default styled(UnstyledButton)`
  ${Bootstrap.getAll([
    '.btn',
    '.btn-default',
    '.btn-primary',
    '.btn-secondary',
    '.btn-outline',
    '.btn-link',
    '.btn-lg',
    '.btn-sm',
    '.btn-fluid',
  ])}
`;
