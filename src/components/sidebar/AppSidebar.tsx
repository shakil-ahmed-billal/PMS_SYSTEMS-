"use client";

import {
  Calendar,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
  BarChart3,
  FolderKanban,
  Users,
  FileText,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Bell,
  CreditCard,
  LogOut,
  Plus,
  MoreHorizontal,
  Zap,
  Star,
  Archive,
  Trash2,
} from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const mainMenuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    badge: null,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    badge: 12,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    badge: null,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
    badge: "New",
  },
];

const projectItems = [
  { title: "Website Redesign", icon: Star, active: true },
  { title: "Mobile App", icon: Zap },
  { title: "Marketing Campaign", icon: MessageSquare },
];

const teamItems = [
  { title: "Engineering", members: 12 },
  { title: "Design", members: 8 },
  { title: "Marketing", members: 6 },
];

const resourceItems = [
  {
    title: "Documents",
    url: "#",
    icon: FileText,
  },
  {
    title: "Archive",
    url: "#",
    icon: Archive,
  },
  {
    title: "Trash",
    url: "#",
    icon: Trash2,
  },
];

const workspaces = [
  { name: "Acme Inc", plan: "Pro", color: "bg-blue-500" },
  { name: "Acme Corp", plan: "Free", color: "bg-purple-500" },
  { name: "Startup LLC", plan: "Enterprise", color: "bg-green-500" },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`flex flex-col h-screen border-r bg-background transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header with Workspace Selector */}
      <div className="border-b px-3 py-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`w-full justify-start h-auto p-2 hover:bg-accent ${isCollapsed ? 'px-0 justify-center' : ''}`}
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold flex-shrink-0">
                A
              </div>
              {!isCollapsed && (
                <>
                  <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                    <span className="truncate font-semibold">Acme Inc</span>
                    <span className="truncate text-xs text-muted-foreground">Pro Plan</span>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start" side="bottom" sideOffset={4}>
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Workspaces
            </DropdownMenuLabel>
            {workspaces.map((workspace, index) => (
              <DropdownMenuItem key={index} className="gap-2 p-2">
                <div className={`flex h-6 w-6 items-center justify-center rounded ${workspace.color} text-white text-xs font-semibold`}>
                  {workspace.name.charAt(0)}
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-sm">{workspace.name}</span>
                  <span className="text-xs text-muted-foreground">{workspace.plan}</span>
                </div>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Workspace</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Bar */}
        {!isCollapsed && (
          <div className="px-2 py-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="h-8 pl-8 bg-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        {/* Main Navigation */}
        <div className="mb-4">
          {!isCollapsed && (
            <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground">
              Main Menu
            </h3>
          )}
          <nav className="space-y-1">
            {mainMenuItems.map((item) => (
              <Button
                key={item.title}
                variant={activeItem === item.title ? "secondary" : "ghost"}
                className={`w-full justify-start ${isCollapsed ? 'px-0 justify-center' : ''}`}
                onClick={() => setActiveItem(item.title)}
              >
                <item.icon className={`h-4 w-4 ${!isCollapsed && 'mr-2'}`} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{item.title}</span>
                    {item.badge && (
                      <Badge
                        variant={typeof item.badge === "number" ? "default" : "secondary"}
                        className="ml-auto h-5 px-1.5 text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Button>
            ))}
          </nav>
        </div>

        {!isCollapsed && <Separator className="my-3" />}

        {/* Projects Section */}
        <Collapsible defaultOpen className="mb-4">
          <div className="mb-2">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-start p-2 hover:bg-accent ${isCollapsed ? 'px-0 justify-center' : ''}`}
              >
                <FolderKanban className={`h-4 w-4 ${!isCollapsed && 'mr-2'}`} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left font-semibold text-sm">Projects</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          {!isCollapsed && (
            <CollapsibleContent>
              <div className="ml-4 space-y-1">
                {projectItems.map((project) => (
                  <Button
                    key={project.title}
                    variant="ghost"
                    className="w-full justify-start text-sm group"
                  >
                    <project.icon className="h-3 w-3 mr-2" />
                    <span className="flex-1 text-left">{project.title}</span>
                    {project.active && (
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1" />
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 opacity-0 group-hover:opacity-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreHorizontal className="h-3 w-3" />
                    </Button>
                  </Button>
                ))}
              </div>
            </CollapsibleContent>
          )}
        </Collapsible>

        {/* Team Section */}
        <Collapsible defaultOpen className="mb-4">
          <div className="mb-2">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-start p-2 hover:bg-accent ${isCollapsed ? 'px-0 justify-center' : ''}`}
              >
                <Users className={`h-4 w-4 ${!isCollapsed && 'mr-2'}`} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left font-semibold text-sm">Team</span>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          {!isCollapsed && (
            <CollapsibleContent>
              <div className="ml-4 space-y-1">
                {teamItems.map((team) => (
                  <Button
                    key={team.title}
                    variant="ghost"
                    className="w-full justify-start text-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-muted mr-2" />
                    <span className="flex-1 text-left">{team.title}</span>
                    <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                      {team.members}
                    </Badge>
                  </Button>
                ))}
              </div>
            </CollapsibleContent>
          )}
        </Collapsible>

        {!isCollapsed && <Separator className="my-3" />}

        {/* Resources */}
        <div className="mb-4">
          {!isCollapsed && (
            <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground">
              Resources
            </h3>
          )}
          <nav className="space-y-1">
            {resourceItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className={`w-full justify-start ${isCollapsed ? 'px-0 justify-center' : ''}`}
              >
                <item.icon className={`h-4 w-4 ${!isCollapsed && 'mr-2'}`} />
                {!isCollapsed && <span>{item.title}</span>}
              </Button>
            ))}
          </nav>
        </div>

        {!isCollapsed && <Separator className="my-3" />}

        {/* Help Section */}
        <Collapsible className="mb-4">
          <div className="mb-2">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-start p-2 hover:bg-accent ${isCollapsed ? 'px-0 justify-center' : ''}`}
              >
                <HelpCircle className={`h-4 w-4 ${!isCollapsed && 'mr-2'}`} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left font-semibold text-sm">Help & Support</span>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          {!isCollapsed && (
            <CollapsibleContent>
              <div className="ml-4 space-y-1">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <BookOpen className="h-3 w-3 mr-2" />
                  <span className="flex-1 text-left">Documentation</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <MessageSquare className="h-3 w-3 mr-2" />
                  <span className="flex-1 text-left">Contact Support</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Bell className="h-3 w-3 mr-2" />
                  <span className="flex-1 text-left">What's New</span>
                  <Badge variant="destructive" className="ml-auto h-4 px-1 text-[10px]">
                    3
                  </Badge>
                </Button>
              </div>
            </CollapsibleContent>
          )}
        </Collapsible>
      </div>

      {/* Footer with User Profile */}
      <div className="border-t p-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`w-full justify-start h-auto p-2 hover:bg-accent ${isCollapsed ? 'px-0 justify-center' : ''}`}
            >
              <Avatar className="h-8 w-8 ring-2 ring-primary/20 flex-shrink-0">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-pink-600 text-white text-sm font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <>
                  <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                    <span className="truncate font-semibold">John Doe</span>
                    <span className="truncate text-xs text-muted-foreground">
                      john@example.com
                    </span>
                  </div>
                  <ChevronUp className="ml-auto h-4 w-4" />
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" side="top" align="end" sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-gradient-to-br from-orange-500 to-pink-600 text-white text-sm">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">John Doe</span>
                  <span className="truncate text-xs text-muted-foreground">
                    john@example.com
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2">
                <User2 className="h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Billing</span>
                <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                  Pro
                </Badge>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive focus:bg-destructive/10">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Quick Settings */}
        {!isCollapsed && (
          <div className="flex gap-1 pt-2">
            <Button variant="ghost" size="icon" className="h-8 w-full">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-full">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Toggle Collapse Button */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-20 h-6 w-6 rounded-full border bg-background shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronRight className="h-4 w-4 rotate-180" />}
      </Button> */}
    </aside>
  );
}