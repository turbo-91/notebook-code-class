import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
    font-size: 1rem;
    margin: 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

export default function Header({ totalCount }) {
    // const countSum = "???";
    return (
        <Title>
            <StyledLink href="/">
                CounterApp
                <span role="img" aria-label="trademark">
                    ™
                </span>{" "}
                — currently counting <strong>{totalCount}</strong> things.
            </StyledLink>
        </Title>
    );
}
