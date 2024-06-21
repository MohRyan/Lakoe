import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const StatusOrder = () => {
  const [accor, setAccor] = useState(false);
  const [activeStep, setActiveStep] = useState(2);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div>
        <Box sx={{ display: "flex", gap: 1 }} className="flex gap-3">
          <ArticleOutlinedIcon />
          <div className="mt-2">
            <Typography
              sx={{
                bgcolor: "yellow",
                width: "150px",
                display: "flex",
                justifyContent: "center",
                borderRadius: 2,
                fontWeight: "bold",
                py: 0.2,
              }}
              className="px-3 py-1 bg-yellow-500 rounded-2xl"
            >
              Belum Dibayar
            </Typography>
            <p className="mt-2">
              Pesanan akan dibatalkan bila pembayaran tidak dilakukan sampai{" "}
              <b>10 Agustus 2023 - 00:00 WIB</b>. Silahkan tunggu sampai
              pembayaran terkonfirmasi sebelum mengirimkan barang.
            </p>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary
                onClick={() => setAccor(!accor)}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {!accor ? <b>Lihat Riwayat Pesanan</b> : <b>Sembunyikan</b>}
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">
                                Last step
                              </Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1
                                  ? "Finish"
                                  : "Continue"}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                      <Typography>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                      </Button>
                    </Paper>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion type="single" collapsible>
              <AccordionItem value={"item-1"}>
                <AccordionTrigger
                  onClick={() => setAccor(!accor)}
                  className="text-blue-600"
                >
                  {!accor ? <b>Lihat Riwayat Pesanan</b> : <b>Sembunyikan</b>}
                </AccordionTrigger>
                <AccordionContent>
                  <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                      {steps.map((step, index) => (
                        <Step key={step.label}>
                          <StepLabel
                            optional={
                              index === 2 ? (
                                <Typography variant="caption">
                                  Last step
                                </Typography>
                              ) : null
                            }
                          >
                            {step.label}
                          </StepLabel>
                          <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
                                </Button>
                                <Button
                                  disabled={index === 0}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Back
                                </Button>
                              </div>
                            </Box>
                          </StepContent>
                        </Step>
                      ))}
                    </Stepper>
                    {activeStep === steps.length && (
                      <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>
                          All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                          Reset
                        </Button>
                      </Paper>
                    )}
                  </Box>
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}
          </div>
        </Box>
      </div>
    </>
  );
};

export default StatusOrder;
