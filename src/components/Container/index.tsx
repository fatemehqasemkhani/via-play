import React, {ReactNode} from 'react';
import { Container } from "./style";

type Props = {
    title: string,
    children: ReactNode,
}

const Index: React.FC<Props> = ({ title, children }) => (
    <Container>
        <h1>{title}</h1>
        {children}
    </Container>
)

export default Index;