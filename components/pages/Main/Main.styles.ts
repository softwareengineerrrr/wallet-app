import { styled } from '@mui/material';

import { FlexCol } from '@ui/common/utils/Flex.styles';

export const MainLayout = styled(FlexCol)`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 8svh 0;
`;

export const MainButtonBlock = styled(FlexCol)`
    align-items: center;
    row-gap: 20px;
`;
