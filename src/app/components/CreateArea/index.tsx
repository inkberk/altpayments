import * as React from 'react';
import * as styles from './index.scss';
import plus from '../../../assets/icons/plus.svg'
import {CircleButton} from "app/components/Buttons/CircleButton";
import {Link} from "react-router-dom";
import {ROUTES} from "app/utils/constants";

export interface CreateAreaProps {
  name: any;
  type: any;
}

const CreateArea = (props: CreateAreaProps) => {


  return (
    <section className={styles.add_area}>
      <div className={styles.text}>
        <p>Hello {name},&nbsp;&nbsp;</p>
        <Link to={ROUTES.CUSTOMER_CREATE}>
          <CircleButton icon={plus}>Create</CircleButton>
        </Link>
        <p>&nbsp;your first {props.type}.</p>
      </div>
    </section>
  )
};

export default CreateArea;
