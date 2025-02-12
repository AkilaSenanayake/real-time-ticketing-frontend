"use client";

import React, { useState } from "react";
import api from "../../utils/api";

const Simulate = () => {
  const [vendorCount, setVendorCount] = useState("");
  const [consumerCount, setConsumerCount] = useState("");
  const [simulationOutput, setSimulationOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const startSimulation = async () => {
    if (!vendorCount || !consumerCount) {
      alert("Please enter both vendor and consumer counts.");
      return;
    }

    setSimulationOutput(`Simulation started with ${vendorCount} vendors and ${consumerCount} consumers.`);

    try {
      await api.startSimulation(vendorCount, consumerCount);
      setIsRunning(true);
    } catch (error) {
      console.error(error);
      alert("Failed to start simulation.");
      setSimulationOutput("Failed to start simulation.");
    }
  };

  const stopSimulation = async () => {
    try {
      await api.stopSimulation();
      setSimulationOutput("Simulation stopped.");
      setIsRunning(false);
    } catch (error) {
      console.error(error);
      alert("Failed to stop simulation.");
      setSimulationOutput("Failed to stop simulation.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-8">Enter to start Simulation</h1>

      <div className="flex flex-row items-center justify-center w-full">
        {/* Left side: Simulation Output */}
        <div className="w-1/2 h-64 bg-black text-white rounded-md p-4 overflow-auto border border-grey-500 shadow-lg">
          <p className="text-sm font-mono whitespace-pre-wrap">{simulationOutput}</p>
        </div>

        {/* Right side: Input Fields and Buttons */}
        <div className="flex flex-col ml-8 gap-4 w-1/2 max-w-md">
          <div className="flex flex-col">
            <label htmlFor="vendorCount" className="mb-2 text-gray-700">
              Vendor Count:
            </label>
            <input
              type="number"
              id="vendorCount"
              value={vendorCount}
              onChange={(e) => setVendorCount(e.target.value)}
              className="border border-gray-300 p-2 rounded-full" // Rounded input
              placeholder="Enter number of vendors"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="consumerCount" className="mb-2 text-gray-700">
              Customer Count:
            </label>
            <input
              type="number"
              id="consumerCount"
              value={consumerCount}
              onChange={(e) => setConsumerCount(e.target.value)}
              className="border border-gray-300  p-2 rounded-full" // Rounded input
              placeholder="Enter number of customers"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={startSimulation}
              disabled={isRunning}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600" // Rounded button
            >
              Start
            </button>
            <button
              onClick={stopSimulation}
              disabled={!isRunning}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600" // Rounded button
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulate;
