import { Alert, Button, Snackbar, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Minmax: React.FC = () => {
  const [type, setType] = useState("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const generateNumbers = () => {
    const nums = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    setNumbers(nums);
    setType(Math.random() < 0.5 ? "max" : "min");
  };

  const checkAnswer = (number: number) => {
    const isCorrect =
      (type === "max" && number === Math.max(...numbers)) ||
      (type === "min" && number === Math.min(...numbers));
    if (isCorrect) {
      setSnackbar({
        open: true,
        message: "✅ Chính xác! Bạn giỏi quá 😎",
        severity: "success",
      });

      setTimeout(() => {
        generateNumbers();
      }, 2000);
    } else {
      setSnackbar({
        open: true,
        message: "❌ Sai rồi, thử lại nhé!",
        severity: "error",
      });
    }
  };

  useEffect(() => {
    generateNumbers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Chọn số {type === "max" ? "lớn nhất" : "bé nhất"}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        justifyContent="center"
      >
        {numbers.map((number, index) => (
          <Button key={index} onClick={() => checkAnswer(number)}>
            <Typography variant="h5">{number}</Typography>
          </Button>
        ))}
      </Stack>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};
