import { ReactElement } from 'react';

import { Step, StepIconProps, StepLabel, Stack } from '@mui/material';

import * as S from './StepLine.styles';
import { LockIcon, PersonIcon, SecurityIcon } from './icons';

const steps = ['Set account', 'Secure wallet', 'Comfirm security'];

const ColorlibStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;

    const icons: { [index: string]: ReactElement } = {
        1: <PersonIcon />,
        2: <LockIcon />,
        3: <SecurityIcon />,
    };

    return (
        <S.ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </S.ColorlibStepIconRoot>
    );
};

const StepLine = ({ activeStep }: { activeStep: number }) => {
    return (
        <Stack sx={{ width: '100%' }}>
            <S.StepLineLayout alternativeLabel activeStep={activeStep} connector={<S.ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </S.StepLineLayout>
        </Stack>
    );
};
export default StepLine;
