import React, {ReactNode} from 'react';

type Props = {
    title: string,
    children: ReactNode,
}

const Index: React.FC<Props> = ({ title, children }) => (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
)

export default Index;