---
layout: page
title: Subsurface - Introduction to AUVs
description: Courses about the fabrication of a Low Cost Subsurface AUV
permalink: /teaching/subsurface/module_0/
---

# Introduction to Autonomous Underwater Vehicles (AUVs)

## Course Overview

Welcome to the Subsurface AUV Construction Course for Master's level robotics students. This course will guide you through designing, building, and operating a swarm of autonomous underwater vehicles capable of acoustic communication and coordinated missions.

### Course Objectives

By the end of this course, you will be able to:

- Design and fabricate a low-cost AUV prototype
- Program navigation and control systems for underwater robotics
- Implement swarm coordination algorithms
- Develop acoustic communication protocols for underwater environments
- Deploy and test AUV systems in real-world scenarios

## Learning Outcomes for Module 0

After completing this module, students will be able to:

1. Define autonomous underwater vehicles and their key characteristics
2. Identify major AUV applications across different industries
3. Explain fundamental principles of underwater navigation and positioning
4. Describe underwater acoustic communication principles and limitations
5. Recognize essential AUV subsystems and their functions
6. Understand the unique challenges of the underwater environment for robotics

---

## 1. Overview of AUV Technology and Applications

### What is an Autonomous Underwater Vehicle (AUV)?

An Autonomous Underwater Vehicle (AUV) is an unmanned, untethered submersible robot that operates independently underwater without real-time human control. Unlike Remotely Operated Vehicles (ROVs) that require a tether connection, AUVs carry their own power source and make autonomous decisions based on pre-programmed missions or real-time sensor data.

### Key Characteristics of AUVs

**Autonomy**: AUVs operate independently, making decisions based on programmed algorithms and sensor inputs without continuous human intervention.

**Self-Propulsion**: They carry onboard propulsion systems, typically using thrusters or propellers for movement in three-dimensional space.

**Energy Independence**: AUVs have self-contained power systems, usually batteries, that limit their operational duration but provide complete mobility freedom.

**Sensor Integration**: Modern AUVs incorporate multiple sensors for navigation, environmental monitoring, and mission-specific data collection.

### Major AUV Applications

**Scientific Research**

- Oceanographic surveys and water column profiling
- Marine ecosystem monitoring and biodiversity studies
- Climate change research through long-term data collection
- Deep-sea exploration and geological surveys

**Military and Defense**

- Mine countermeasures and explosive ordnance disposal
- Intelligence gathering and reconnaissance missions
- Port security and harbor protection
- Anti-submarine warfare operations

**Commercial and Industrial**

- Offshore oil and gas pipeline inspection
- Underwater infrastructure maintenance
- Archaeological site documentation
- Aquaculture monitoring and management

**Environmental Monitoring**

- Pollution tracking and water quality assessment
- Marine protected area surveillance
- Habitat mapping and conservation efforts
- Disaster response and environmental impact assessment

### AUV Classifications

**By Size and Endurance**:

- **Micro AUVs**: < 10 kg, hours of operation
- **Mini AUVs**: 10-100 kg, days of operation
- **Standard AUVs**: 100-1000 kg, weeks of operation
- **Large AUVs**: > 1000 kg, months of operation

**By Mission Type**:

- **Survey AUVs**: Optimized for mapping and data collection
- **Intervention AUVs**: Equipped with manipulators for interaction tasks
- **Communication AUVs**: Designed for data relay and network operations
- **Hybrid AUVs**: Multi-purpose vehicles with modular capabilities

---

## 2. Basic Principles of Underwater Navigation and Communication

### The Underwater Environment Challenges

The underwater environment presents unique challenges that distinguish marine robotics from terrestrial or aerial systems:

**Electromagnetic Wave Attenuation**: Radio waves and GPS signals cannot penetrate water effectively, eliminating most standard navigation and communication methods used in other robotic domains.

**Light Limitations**: Optical systems have severely limited range underwater due to absorption and scattering, making vision-based navigation challenging beyond short distances.

**Pressure Effects**: Increasing hydrostatic pressure with depth affects all systems, requiring robust design and pressure-resistant components.

**Corrosion and Biofouling**: The marine environment is highly corrosive, and biological growth can affect sensors and surfaces over time.

### Underwater Navigation Principles

**Dead Reckoning Navigation**
Dead reckoning forms the foundation of underwater navigation, using internal sensors to track position relative to a known starting point:

- **Inertial Measurement Units (IMUs)**: Provide acceleration and angular velocity data
- **Doppler Velocity Logs (DVLs)**: Measure velocity relative to the seafloor or water column
- **Magnetometers**: Provide heading reference using Earth's magnetic field
- **Pressure Sensors**: Determine depth based on hydrostatic pressure

**Acoustic Navigation Systems**
Since electromagnetic positioning systems fail underwater, acoustic methods become essential:

- **Long Baseline (LBL)**: Uses multiple acoustic beacons placed on the seafloor for triangulation
- **Short Baseline (SBL)**: Employs acoustic beacons mounted on a surface vessel
- **Ultra-Short Baseline (USBL)**: Combines acoustic ranging with precise angular measurements

**Terrain-Aided Navigation**
Advanced AUVs can use environmental features for navigation:

- **Bathymetric Navigation**: Matching measured depth profiles to known seafloor maps
- **Feature-Based Navigation**: Using distinctive underwater landmarks or structures
- **Simultaneous Localization and Mapping (SLAM)**: Building maps while navigating

### Positioning Accuracy and Error Accumulation

Navigation errors in AUVs typically accumulate over time due to the absence of external reference signals. Understanding error sources and mitigation strategies is crucial:

- **Sensor Drift**: IMU bias and scale factor errors grow over time
- **Current Effects**: Unknown water currents cause dead reckoning errors
- **Calibration Issues**: Misaligned sensors and uncalibrated parameters introduce systematic errors

---

## 3. Underwater Communication Principles

### Acoustic Communication Fundamentals

Underwater acoustic communication is the primary method for data transmission between submerged vehicles and surface stations or between AUVs in a swarm.

**Sound Propagation in Water**
Sound waves travel approximately 1500 m/s in seawater, much faster than in air but orders of magnitude slower than electromagnetic waves. This speed creates significant latency in communication systems.

**Frequency Considerations**

- **Low Frequencies (< 1 kHz)**: Long range but very low data rates
- **Medium Frequencies (1-10 kHz)**: Moderate range and data rates, commonly used
- **High Frequencies (> 10 kHz)**: Short range but higher data rates possible

**Acoustic Channel Characteristics**
The underwater acoustic channel exhibits several challenging properties:

- **Multipath Propagation**: Sound reflects off surfaces creating multiple signal paths
- **Doppler Effects**: Vehicle motion causes frequency shifts in transmitted signals
- **Ambient Noise**: Marine life, shipping, and weather create background interference
- **Time-Varying Channel**: Environmental conditions change communication characteristics

### Communication System Design Considerations

**Power Limitations**: Acoustic modems consume significant power, affecting AUV endurance and requiring careful energy management.

**Data Rate Constraints**: Underwater acoustic channels typically support much lower data rates than terrestrial wireless systems, requiring efficient protocols and data compression.

**Range vs. Data Rate Trade-offs**: Higher data rates generally require higher frequencies, which have shorter transmission ranges, creating fundamental design trade-offs.

**Reliability and Error Correction**: The harsh acoustic channel requires robust error detection and correction algorithms to ensure reliable data transmission.

---

## 4. Essential AUV Components and Subsystems

### Hull and Structural Design

**Pressure Vessels**: Protect sensitive electronics from water ingress and pressure effects. Common materials include aluminum, titanium, and composite materials.

**Hydrodynamic Design**: Hull shape affects drag, stability, and maneuverability. Torpedo-shaped hulls are common for efficiency, while more complex shapes may be used for specific missions.

**Modular Architecture**: Many AUVs use modular designs allowing component replacement and mission-specific configurations.

### Propulsion and Control Systems

**Thruster Configurations**:

- **Single Propeller**: Simple and efficient for forward motion
- **Multiple Thrusters**: Enable omnidirectional movement and precise positioning
- **Vectored Thrust**: Provides enhanced maneuverability through thrust direction control

**Control Surfaces**: Some AUVs use fins and rudders for control, particularly effective at higher speeds.

**Buoyancy Control**: Active ballast systems allow depth control and trim adjustment.

### Power Systems

**Primary Batteries**: Provide high energy density but cannot be recharged underwater. Common types include lithium, alkaline, and specialized underwater batteries.

**Secondary Batteries**: Rechargeable systems that may support docking stations or surface charging between missions.

**Power Management**: Sophisticated systems monitor and distribute power to various subsystems, often including sleep modes and power scheduling.

**Energy Harvesting**: Experimental systems that collect energy from ocean currents, thermal gradients, or wave motion.

### Sensor Suites

**Navigation Sensors**:

- Inertial Measurement Units (IMUs)
- Doppler Velocity Logs (DVLs)
- Magnetometers and gyrocompasses
- Pressure sensors for depth measurement

**Environmental Sensors**:

- Conductivity, Temperature, and Depth (CTD) sensors
- Dissolved oxygen and pH sensors
- Turbidity and fluorescence sensors
- Current meters and acoustic Doppler profilers

**Payload Sensors**: Mission-specific sensors such as cameras, sonar systems, chemical analyzers, or sampling equipment.

### Computing and Control Architecture

**Main Computing Unit**: Typically embedded computers or single-board computers running real-time operating systems.

**Control Algorithms**: Include navigation filters, guidance systems, and control loops for maintaining desired vehicle behavior.

**Data Logging**: Systems for recording sensor data, navigation information, and system status for post-mission analysis.

**Communication Interfaces**: Hardware and software for acoustic modems, emergency beacons, and surface communication systems.

---

## 5. Swarm Robotics Context

### Introduction to Multi-AUV Systems

Swarm robotics applied to underwater vehicles offers significant advantages over single-vehicle operations:

**Distributed Sensing**: Multiple vehicles can cover larger areas and provide redundant measurements.

**Fault Tolerance**: Swarm operations continue even if individual vehicles fail or are lost.

**Collaborative Missions**: Complex tasks can be divided among multiple vehicles with specialized capabilities.

**Cost Effectiveness**: Multiple low-cost vehicles may be more economical than single high-capability platforms.

### Swarm Communication Requirements

**Network Topology**: Understanding how vehicles connect and share information affects overall system performance and reliability.

**Protocol Design**: Efficient communication protocols minimize bandwidth usage while ensuring critical information reaches all relevant vehicles.

**Coordination Algorithms**: Methods for task allocation, formation control, and collaborative decision-making in distributed systems.

---

## 6. Course Project Overview

### Individual AUV Development

Each student will design and build a low-cost AUV prototype throughout this course. Your vehicle should incorporate:

- Basic navigation and control capabilities
- Acoustic communication systems
- Environmental sensors appropriate for your chosen mission
- Modular design enabling easy modification and testing

### Swarm Mission Planning

The course culminates in a coordinated swarm mission where student-built AUVs work together to accomplish a complex task. Possible missions include:

- Collaborative environmental monitoring
- Search and mapping operations
- Distributed sensing networks
- Formation flying demonstrations

### Design Philosophy: Low-Cost Solutions

This course emphasizes affordable, accessible AUV technology. You will learn to:

- Select cost-effective components without sacrificing functionality
- Use readily available materials and manufacturing techniques
- Implement open-source software and hardware solutions
- Balance performance requirements with budget constraints

---

## Module 0 Assessment

### Knowledge Check Questions

1. What are the three primary differences between AUVs and ROVs?

2. Explain why GPS cannot be used for underwater navigation and identify three alternative positioning methods.

3. Describe the relationship between acoustic frequency and communication range in underwater systems.

4. List five essential subsystems found in most AUVs and briefly explain their functions.

5. What are three advantages of using multiple AUVs in a swarm versus a single large AUV?

### Practical Exercise

Research and present a brief case study (10-15 minutes) on a real-world AUV application. Your presentation should include:

- The specific AUV system used
- Mission requirements and environmental challenges
- Key technical solutions implemented
- Results achieved and lessons learned
- Relevance to low-cost AUV development

### Preparation for Module 1

Before the next module, please:

1. Review basic electronics and microcontroller programming concepts
2. Research low-cost materials suitable for underwater applications
3. Consider your individual AUV mission goals and requirements
4. Begin thinking about component selection and design trade-offs

---

## Additional Resources

### Recommended Reading

- "Introduction to Autonomous Underwater Vehicles" by Antonelli, G.
- "Underwater Robotics: Science, Design & Fabrication" by SeaPerch Program
- Recent papers from IEEE/OES Autonomous Underwater Vehicles Conference

### Online Resources

- Woods Hole Oceanographic Institution AUV Laboratory
- MIT Sea Grant AUV resources
- Open-source AUV projects (ArduSub, BlueROV)

### Industry Contacts

- Local marine technology companies
- University research laboratories
- Government oceanographic institutions

---

_This module provides the foundation for understanding AUV technology and prepares students for hands-on design and fabrication work in subsequent modules. The combination of theoretical knowledge and practical context ensures students are ready to tackle the challenges of building functional underwater robots._
