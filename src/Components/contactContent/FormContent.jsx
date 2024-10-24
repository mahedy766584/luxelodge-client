import { Card, CardBody, CardFooter, CardHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import Button from "../../Components/button/Button";

const FormContent = () => {
    return (
        <div>
            <Card className="py-6 mt-10">
                <CardHeader
                    variant="gradient"
                    className="mb-4 grid h-28 place-items-center bg-navyGray"
                >
                    <Typography variant="h3" className="text-silver">
                        Contact Us📱
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4 text-xl">
                    <Input label="Name" size="lg" />
                    <Input label="Email" size="lg" />
                    <Textarea label="Message" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>
                        Contact Us
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default FormContent;