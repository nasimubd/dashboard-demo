"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  ArrowDown,
  ArrowUp,
  AlertCircle,
  Activity,
  DollarSign,
  Users,
  Package,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

// Mock data for charts
const monthlyData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
];

const pieData = [
  { name: "Sales", value: 400, color: "#FF6B6B" },
  { name: "Marketing", value: 300, color: "#4ECDC4" },
  { name: "Operations", value: 300, color: "#45B7D1" },
  { name: "Other", value: 200, color: "#96CEB4" },
];

const campaignData = [
  { name: "Campaign A", value: 85 },
  { name: "Campaign B", value: 65 },
  { name: "Campaign C", value: 45 },
];

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="p-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              Analytics Dashboard
            </h2>
            <Alert className="w-[300px]">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Last updated: 5 minutes ago</AlertDescription>
            </Alert>
          </div>

          {/* Top Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
                <Badge className="mt-2 bg-green-500">Active</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
                <Badge className="mt-2 bg-green-500">Increasing</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Server Status
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.2%</div>
                <p className="text-xs text-muted-foreground">
                  +0.1% from last hour
                </p>
                <Badge className="mt-2 bg-green-500">Healthy</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Orders
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">52</div>
                <p className="text-xs text-muted-foreground">
                  -5 from last hour
                </p>
                <Badge className="mt-2 bg-yellow-500">Pending</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Temperature Gauge */}
            <Card>
              <CardHeader>
                <CardTitle>System Temperature</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[200px] w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold">42°C</div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-2 w-full rounded-full bg-gray-200">
                    <div className="h-full w-[42%] rounded-full bg-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Trend */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Monthly Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#4ECDC4"
                      fill="#4ECDC4"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Revenue Distribution */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Revenue Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Campaign Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {campaignData.map((campaign) => (
                  <div key={campaign.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">{campaign.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {campaign.value}%
                      </div>
                    </div>
                    <Progress value={campaign.value} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Monthly Performance */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4ECDC4" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Growth Metrics */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Growth Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#FF6B6B" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Additional Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.24%</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  0.3% increase
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Average Session</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2m 45s</div>
                <div className="flex items-center text-sm text-red-500">
                  <ArrowDown className="mr-1 h-4 w-4" />
                  0.1% decrease
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.3%</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  2.1% improvement
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  12.3% increase
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
