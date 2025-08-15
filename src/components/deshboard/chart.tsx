import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const Chart = () => {
    const interacoesPorDia = [
        { data: "2024-08-10", interacoes: 120 },
        { data: "2024-08-11", interacoes: 95 },
        { data: "2024-08-12", interacoes: 150 },
        { data: "2024-08-13", interacoes: 180 },
    ]

    const chartConfig = {
        interacoes: {
        label: "Interações",
        color: "#2563eb",
    },
    } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={interacoesPorDia}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Line
                type="monotone"
                dataKey="interacoes"
                stroke={chartConfig.interacoes.color}
            />
            <ChartTooltipContent />
            </LineChart>
        </ResponsiveContainer>
    </ChartContainer>
  );
}