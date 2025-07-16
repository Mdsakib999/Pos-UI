import { useState } from "react";

const FlowchartNode = ({
  children,
  isStart = false,
  isActive = false,
  onClick,
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer hover:shadow-md";
  const startClasses = "bg-orange-500 text-white hover:bg-orange-600";
  const regularClasses =
    "bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400";
  const activeClasses = "bg-blue-50 border-blue-400 text-blue-700";

  const classes = `${baseClasses} ${
    isStart ? startClasses : isActive ? activeClasses : regularClasses
  }`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

const ConnectorLine = ({ vertical = false, length = "w-8" }) => {
  if (vertical) {
    return <div className="h-36 w-0.5 bg-gray-300 mx-auto"></div>;
  }
  return <div className={`h-0.5 bg-gray-300 ${length}`}></div>;
};

const FlowchartDesign = () => {
  const [activeNode, setActiveNode] = useState("start");

  const handleNodeClick = (nodeId) => {
    setActiveNode(nodeId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 my-18">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        We designed a journey for an application aimed at waiters and{" "}
        <br className="hidden md:block" /> resturant managers.
        <br className="hidden md:block" /> This flow covers all stages of
        interaction with the application.
      </h2>
      <div className="max-w-6xl mx-auto mt-10">
        {/* Main horizontal flow */}
        <div className="flex items-center justify-center mb-12">
          <FlowchartNode
            isStart={true}
            isActive={activeNode === "start"}
            onClick={() => handleNodeClick("start")}
          >
            Start
          </FlowchartNode>
          <ConnectorLine />
          <FlowchartNode
            isActive={activeNode === "signup"}
            onClick={() => handleNodeClick("signup")}
          >
            Sign up/ Login
          </FlowchartNode>
          <ConnectorLine />
          <FlowchartNode
            isActive={activeNode === "home"}
            onClick={() => handleNodeClick("home")}
          >
            Home
          </FlowchartNode>
          <ConnectorLine />
          <FlowchartNode
            isActive={activeNode === "profile"}
            onClick={() => handleNodeClick("profile")}
          >
            Profile
          </FlowchartNode>
          <ConnectorLine />
          <FlowchartNode
            isActive={activeNode === "earning"}
            onClick={() => handleNodeClick("earning")}
          >
            Total earning
          </FlowchartNode>
          <ConnectorLine />
          <FlowchartNode
            isActive={activeNode === "progress"}
            onClick={() => handleNodeClick("progress")}
          >
            In progress
          </FlowchartNode>
          <ConnectorLine />
          <FlowchartNode
            isActive={activeNode === "waiting"}
            onClick={() => handleNodeClick("waiting")}
          >
            Waiting list
          </FlowchartNode>
        </div>

        {/* Vertical connectors and branches */}
        <div className="relative">
          {/* Home branch connector - positioned under Home node */}
          <div className="absolute left-[342px] -top-18">
            <ConnectorLine vertical />
          </div>

          {/* Orders branch */}
          <div className="flex justify-start ml-[342px] mb-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <FlowchartNode
                  isActive={activeNode === "orders"}
                  onClick={() => handleNodeClick("orders")}
                >
                  Orders
                </FlowchartNode>
                <ConnectorLine length="w-8" />
                <FlowchartNode
                  isActive={activeNode === "create"}
                  onClick={() => handleNodeClick("create")}
                >
                  Create orders
                </FlowchartNode>
                <ConnectorLine length="w-8" />
                <FlowchartNode
                  isActive={activeNode === "choose"}
                  onClick={() => handleNodeClick("choose")}
                >
                  Choose type
                </FlowchartNode>
                <ConnectorLine length="w-8" />
                <FlowchartNode
                  isActive={activeNode === "menu"}
                  onClick={() => handleNodeClick("menu")}
                >
                  Menu
                </FlowchartNode>
              </div>
            </div>
          </div>

          {/* Table branch connector */}
          <div className="absolute left-[342px] top-0">
            <ConnectorLine vertical />
          </div>

          {/* Table branch */}
          <div className="flex justify-start ml-[342px] mb-8">
            <div className="flex items-center">
              <FlowchartNode
                isActive={activeNode === "table"}
                onClick={() => handleNodeClick("table")}
              >
                Table
              </FlowchartNode>
              <ConnectorLine length="w-8" />
              <FlowchartNode
                isActive={activeNode === "map"}
                onClick={() => handleNodeClick("map")}
              >
                Map of tables
              </FlowchartNode>
            </div>
          </div>

          {/* Payment branch connector */}
          <div className="absolute left-[342px] top-10">
            <ConnectorLine vertical />
          </div>

          {/* Payment branch */}
          <div className="flex justify-start ml-[342px]">
            <div className="flex items-center">
              <FlowchartNode
                isActive={activeNode === "all"}
                onClick={() => handleNodeClick("all")}
              >
                All
              </FlowchartNode>
              <ConnectorLine length="w-8" />
              <FlowchartNode
                isActive={activeNode === "payment"}
                onClick={() => handleNodeClick("payment")}
              >
                Payment
              </FlowchartNode>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowchartDesign;
