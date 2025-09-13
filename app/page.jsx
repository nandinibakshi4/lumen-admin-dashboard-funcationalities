"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  LayoutDashboard,
  Settings,
  Percent,
  BarChart3,
  Users,
  Bell,
  LogOut,
  Edit,
  Trash2,
  Power,
  PowerOff,
  UserCheck,
  FileText,
  TrendingUp,
  Calendar,
} from "lucide-react"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"


export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
const data = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 45 },
  { name: "Mar", users: 60 },
  { name: "Apr", users: 50 },
  { name: "May", users: 80 },
  { name: "Jun", users: 65 },
]
  const plansData = [
    {
      id: 1,
      name: "Fibernet 50 Mbps",
      price: "$20",
      quota: "500 GB",
      duration: "Active",
      status: "active",
      description: "High-speed fiber internet for home users",
      durationMonths: 1,
    },
    {
      id: 2,
      name: "Copper Broadband",
      price: "$15",
      quota: "300 GB",
      duration: "Active",
      status: "active",
      description: "Reliable copper broadband connection",
      durationMonths: 1,
    },
    {
      id: 3,
      name: "Fibernet 100 Mbps",
      price: "$35",
      quota: "1000 GB",
      duration: "Active",
      status: "active",
      description: "Premium fiber internet for heavy users",
      durationMonths: 1,
    },
  ]

  const discountsData = [
    {
      id: 1,
      name: "Summer Offer",
      percentage: "20%",
      condition: "Valid till June",
      status: "Active",
      type: "percentage",
      value: 20,
      planName: "Fibernet 50 Mbps",
    },
    {
      id: 2,
      name: "New User Offer",
      percentage: "15%",
      condition: "First Month Only",
      status: "Inactive",
      type: "percentage",
      value: 15,
      planName: "All Plans",
    },
  ]

  const usersData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "end-user",
      subscriptions: 2,
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "end-user",
      subscriptions: 1,
      status: "active",
      joinDate: "2024-02-20",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@sms.com",
      role: "admin",
      subscriptions: 0,
      status: "active",
      joinDate: "2023-12-01",
    },
  ]

  const subscriptionsData = [
    {
      id: 1,
      userId: 1,
      userName: "John Doe",
      planName: "Fibernet 100 Mbps",
      startDate: "2024-09-01",
      endDate: "2024-10-01",
      status: "active",
      autoRenew: true,
      price: "$35",
    },
    {
      id: 2,
      userId: 2,
      userName: "Jane Smith",
      planName: "Fibernet 50 Mbps",
      startDate: "2024-08-15",
      endDate: "2024-09-15",
      status: "expired",
      autoRenew: false,
      price: "$20",
    },
    {
      id: 3,
      userId: 1,
      userName: "John Doe",
      planName: "Copper Broadband",
      startDate: "2024-07-01",
      endDate: "2024-08-01",
      status: "cancelled",
      autoRenew: false,
      price: "$15",
    },
  ]

  const auditLogsData = [
    {
      id: 1,
      actorName: "Admin User",
      action: "Created new plan: Fibernet 100 Mbps",
      timestamp: "2024-09-13 10:30:00",
      type: "plan_creation",
    },
    {
      id: 2,
      actorName: "John Doe",
      action: "Subscribed to Fibernet 100 Mbps",
      timestamp: "2024-09-13 09:15:00",
      type: "subscription",
    },
    {
      id: 3,
      actorName: "Admin User",
      action: "Updated discount: Summer Offer",
      timestamp: "2024-09-12 16:45:00",
      type: "discount_update",
    },
    {
      id: 4,
      actorName: "Jane Smith",
      action: "Cancelled subscription: Fibernet 50 Mbps",
      timestamp: "2024-09-12 14:20:00",
      type: "cancellation",
    },
  ]

  const usageData = [
    {
      id: 1,
      userName: "John Doe",
      planName: "Fibernet 100 Mbps",
      dataUsed: "750 GB",
      quota: "1000 GB",
      month: "September",
      year: 2024,
      percentage: 75,
    },
    {
      id: 2,
      userName: "Jane Smith",
      planName: "Fibernet 50 Mbps",
      dataUsed: "480 GB",
      quota: "500 GB",
      month: "August",
      year: 2024,
      percentage: 96,
    },
  ]

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "plans", label: "Manage Plans", icon: Settings },
    { id: "discounts", label: "Manage Discounts", icon: Percent },
    { id: "users", label: "User Management", icon: Users },
    { id: "subscriptions", label: "Subscriptions", icon: UserCheck },
    { id: "usage", label: "Usage Tracking", icon: TrendingUp },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "activity", label: "User Activity", icon: Calendar },
    { id: "audit", label: "Audit Logs", icon: FileText },
    { id: "notifications", label: "Notifications", icon: Bell },
  ]

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white border border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">1,234</div>
            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Cancelled (This Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">56</div>
            <p className="text-xs text-red-600 mt-1">-8% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Most Popular Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-semibold text-teal-500">Fibernet 100 Mbps</div>
            <p className="text-xs text-gray-500 mt-1">45% of all subscriptions</p>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">$28,450</div>
            <p className="text-xs text-green-600 mt-1">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Manage Plans Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Manage Plans</h2>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-teal-500 hover:bg-teal-500 border-none">
                <TableHead className="text-white font-semibold text-center bg-teal-500">Plan Name</TableHead>
                <TableHead className="text-white font-semibold text-center bg-teal-500">Price</TableHead>
                <TableHead className="text-white font-semibold text-center bg-teal-500">Quota</TableHead>
                <TableHead className="text-white font-semibold text-center bg-teal-500">Duration months</TableHead>
                <TableHead className="text-white font-semibold text-center bg-teal-500">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plansData.map((plan) => (
                <TableRow key={plan.id} className="border-b border-gray-100">
                  <TableCell className="font-medium text-center">{plan.name}</TableCell>
                  <TableCell className="text-center">{plan.price}</TableCell>
                  <TableCell className="text-center">{plan.quota}</TableCell>
                  <TableCell className="text-center">{plan.duration}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" className="h-7 px-3 bg-gray-800 hover:bg-gray-900 text-white text-xs">
                        Edit
                      </Button>
                      <Button size="sm" className="h-7 px-3 bg-gray-800 hover:bg-gray-900 text-white text-xs">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Manage Discounts Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Manage Discounts</h2>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-teal-500 hover:bg-teal-500 border-none">
                <TableHead className="text-white font-semibold text-center bg-teal-500">Discount Name</TableHead>
                <TableHead className="text-white font-semibold text-center bg-teal-500">Percentage</TableHead>
                <TableHead className="text-white font-semibold text-center bg-teal-500">Condition</TableHead>
                <TableHead className="text-white font-semibold text-center bg-teal-500">Status</TableHead>
                <TableHead className="text-white font-semibold text-center bg-teal-500">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {discountsData.map((discount) => (
                <TableRow key={discount.id} className="border-b border-gray-100">
                  <TableCell className="font-medium text-center">{discount.name}</TableCell>
                  <TableCell className="text-center">{discount.percentage}</TableCell>
                  <TableCell className="text-center">{discount.condition}</TableCell>
                  <TableCell className="text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        discount.status === "Active" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
                      }`}
                    >
                      {discount.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex gap-2 justify-center">
                      {discount.status === "Active" ? (
                        <Button size="sm" className="h-7 px-3 bg-gray-800 hover:bg-gray-900 text-white text-xs">
                          Deactivate
                        </Button>
                      ) : (
                        <Button size="sm" className="h-7 px-3 bg-gray-800 hover:bg-gray-900 text-white text-xs">
                          Activate
                        </Button>
                      )}
                      <Button size="sm" className="h-7 px-3 bg-red-600 hover:bg-red-700 text-white text-xs">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-center text-gray-500">
            <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
             <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPlans = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Plans</h2>
        <Button className="bg-teal-600 hover:bg-teal-700">Add New Plan</Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-600 hover:bg-teal-600 border-none">
              <TableHead className="text-white font-semibold bg-teal-600">Plan Name</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Price</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Quota</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Duration months</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plansData.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell className="font-medium">{plan.name}</TableCell>
                <TableCell>{plan.price}</TableCell>
                <TableCell>{plan.quota}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{plan.durationMonths}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" className="h-8 px-3">
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )

  const renderDiscounts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Discounts</h2>
        <Button className="bg-teal-600 hover:bg-teal-700">Add New Discount</Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-600 hover:bg-teal-600 border-none">
              <TableHead className="text-white font-semibold bg-teal-600">Discount Name</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Percentage</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Condition</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Status</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {discountsData.map((discount) => (
              <TableRow key={discount.id}>
                <TableCell className="font-medium">{discount.name}</TableCell>
                <TableCell>{discount.percentage}</TableCell>
                <TableCell>{discount.condition}</TableCell>
                <TableCell>
                  <Badge
                    variant={discount.status === "Active" ? "default" : "destructive"}
                    className={discount.status === "Active" ? "bg-green-600" : ""}
                  >
                    {discount.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {discount.status === "Active" ? (
                      <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                        <PowerOff className="h-3 w-3 mr-1" />
                        Deactivate
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                        <Power className="h-3 w-3 mr-1" />
                        Activate
                      </Button>
                    )}
                    <Button size="sm" variant="destructive" className="h-8 px-3">
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Churn Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.5%</div>
            <p className="text-xs text-muted-foreground">-2.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 new plans this month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderUserActivity = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Activity</h2>
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>User activity tracking will be displayed here.</p>
            <p className="text-sm mt-2">Recent logins, subscription changes, and user interactions.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderNotifications = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Notifications</h2>
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>System notifications and alerts will be displayed here.</p>
            <p className="text-sm mt-2">Payment failures, subscription renewals, and system updates.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Management</h2>
        <Button className="bg-teal-600 hover:bg-teal-700">Add New User</Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-600 hover:bg-teal-600 border-none">
              <TableHead className="text-white font-semibold bg-teal-600">Name</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Email</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Role</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Subscriptions</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Status</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Join Date</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.role === "admin" ? "default" : "secondary"}>{user.role}</Badge>
                </TableCell>
                <TableCell>{user.subscriptions}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "destructive"} className="bg-green-600">
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" className="h-8 px-3">
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )

  const renderSubscriptions = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Subscription Management</h2>
        <Button className="bg-teal-600 hover:bg-teal-700">Create Subscription</Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-600 hover:bg-teal-600 border-none">
              <TableHead className="text-white font-semibold bg-teal-600">User</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Plan</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Price</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Start Date</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">End Date</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Status</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Auto Renew</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptionsData.map((subscription) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-medium">{subscription.userName}</TableCell>
                <TableCell>{subscription.planName}</TableCell>
                <TableCell>{subscription.price}</TableCell>
                <TableCell>{subscription.startDate}</TableCell>
                <TableCell>{subscription.endDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      subscription.status === "active"
                        ? "default"
                        : subscription.status === "expired"
                          ? "secondary"
                          : "destructive"
                    }
                    className={subscription.status === "active" ? "bg-green-600" : ""}
                  >
                    {subscription.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={subscription.autoRenew ? "default" : "secondary"}>
                    {subscription.autoRenew ? "Yes" : "No"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    {subscription.status === "active" && (
                      <Button size="sm" variant="destructive" className="h-8 px-3">
                        Cancel
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )

  const renderUsage = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Usage Tracking</h2>

      <Card>
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-600 hover:bg-teal-600 border-none">
              <TableHead className="text-white font-semibold bg-teal-600">User</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Plan</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Data Used</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Quota</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Usage %</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Period</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usageData.map((usage) => (
              <TableRow key={usage.id}>
                <TableCell className="font-medium">{usage.userName}</TableCell>
                <TableCell>{usage.planName}</TableCell>
                <TableCell>{usage.dataUsed}</TableCell>
                <TableCell>{usage.quota}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          usage.percentage > 90
                            ? "bg-red-500"
                            : usage.percentage > 70
                              ? "bg-yellow-500"
                              : "bg-green-500"
                        }`}
                        style={{ width: `${usage.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{usage.percentage}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  {usage.month} {usage.year}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={usage.percentage > 90 ? "destructive" : usage.percentage > 70 ? "secondary" : "default"}
                    className={usage.percentage <= 70 ? "bg-green-600" : ""}
                  >
                    {usage.percentage > 90 ? "High" : usage.percentage > 70 ? "Medium" : "Normal"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )

  const renderAuditLogs = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Audit Logs</h2>

      <Card>
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-600 hover:bg-teal-600 border-none">
              <TableHead className="text-white font-semibold bg-teal-600">Actor</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Action</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Type</TableHead>
              <TableHead className="text-white font-semibold bg-teal-600">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditLogsData.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.actorName}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      log.type === "plan_creation"
                        ? "default"
                        : log.type === "subscription"
                          ? "secondary"
                          : log.type === "discount_update"
                            ? "outline"
                            : "destructive"
                    }
                  >
                    {log.type.replace("_", " ")}
                  </Badge>
                </TableCell>
                <TableCell>{log.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "plans":
        return renderPlans()
      case "discounts":
        return renderDiscounts()
      case "users":
        return renderUsers()
      case "subscriptions":
        return renderSubscriptions()
      case "usage":
        return renderUsage()
      case "analytics":
        return renderAnalytics()
      case "activity":
        return renderUserActivity()
      case "audit":
        return renderAuditLogs()
      case "notifications":
        return renderNotifications()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 text-white flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold">SMS Admin</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-slate-700 text-white"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors">
            <LogOut className="h-5 w-5" />
            logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">👤 Admin</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  )
}
