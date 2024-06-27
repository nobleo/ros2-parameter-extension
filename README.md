# ROS2 Parameters Extension

## _A Foxglove Studio Extension_

The **ROS2 Parameters Extension** provides parameter functionality for all your ROS2 nodes including:

- **View** a node's parameter names, types, and values in a table format
- **Set** new parameter values for all types of parameters on a node
- **Load** a previous configuration from a .yml file stored on your computer

This plugin relies on the `/rosapi/nodes` service to be available on the robot in order to build a list of running nodes.
This can either be done by making sure [rosbridge_server](https://github.com/RobotWebTools/rosbridge_suite/blob/ros2/rosbridge_server/launch/rosbridge_websocket_launch.xml) is running:

```ros2 launch rosbridge_server rosbridge_websocket_launch.xml```

or solely the [rosapi node](https://github.com/RobotWebTools/rosbridge_suite/blob/ros2/rosapi/scripts/rosapi_node):

```ros2 run rosapi rosapi_node```
