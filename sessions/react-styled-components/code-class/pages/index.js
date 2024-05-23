import Button from "@/components/Button";
import Link from "@/components/Link";
import Container from "@/components/Container";
import Infobox from "@/components/Infobox";

export default function HomePage() {
  return (
    <>
      <Container direction="row">
        <Button color="danger">Click me</Button>
        <Button>Click me not</Button>
        <p>
          This is a <Link href={"/"}>styled link</Link>
        </p>
        <Infobox
          title="This is an info title"
          message="Read it carefully!!"
          variant="error"
        />
        <Infobox
          title="This is an info title"
          message="Read it carefully!!"
          variant="success"
        />
        <Infobox title="This is an info title" message="Read it carefully!!" />
      </Container>
    </>
  );
}
