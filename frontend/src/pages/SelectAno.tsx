import { Form } from "react-bootstrap";
import { anos } from "../data/dataYars";
import styled from "styled-components";
import { ChangeEvent } from "react";
import { CardRow } from "./CardsTimes";
import React from "react";

interface ISelectAnoProps {
  setAno: React.Dispatch<string>;
}

const FormSelect = styled(Form.Select)`
  width: 100px;
  margin-bottom: 20px;
`;

export const SelectAno = React.memo(function (props: ISelectAnoProps) {
  //define o ano que deve ser listadas as informações
  function toggleAno(evt: React.ChangeEvent<{ value: unknown }>) {
    props.setAno(evt.target.value as string);
  }

  return (
    <CardRow>
      <FormSelect
        onChange={(evt: ChangeEvent<{ value: unknown }>) => toggleAno(evt)}
      >
        {anos.map((ano) => {
          return (
            <option value={ano} key={ano} >
              {ano}
            </option>
          );
        })}
      </FormSelect>
    </CardRow>
  );
});
