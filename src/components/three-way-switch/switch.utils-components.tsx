import React from 'react';
import { ThreeWayToggleType } from '../../view/to-do/to-do.view';
import { SwitchLabel, SwitchRadio } from './three-way-switch.styles';

const titleCase = (str: string) =>
    str.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

type ClickableLabelType = {
    title: ThreeWayToggleType;
    onChange: (title: ThreeWayToggleType) => void;
    id: number
}

export const ClickableLabel = ({ title, onChange, id }: ClickableLabelType) =>
    <SwitchLabel onClick={() => onChange(title)} className={"" + id}>
        {titleCase(title)}
    </SwitchLabel>;

type ConcealedRadioType = {
    value: ThreeWayToggleType;
    selected: ThreeWayToggleType;
}

export const ConcealedRadio = ({ value, selected }: ConcealedRadioType) =>
    <SwitchRadio type="radio" name="switch" checked={selected === value} readOnly />;