#!/bin/bash
tryCount=1
declare -a currentStageStates
pipelineTriggered=0

until [[ $tryCount -lt 121 ]]; do #Configuring for 120 retries 5 seconds per retry, so will retry for 10 minutes.
  #statements
  echo "Trigger pipeline attempt $tryCount"
  currentStates=$(aws codepipeline get-pipeline-state --name s3-to-cfn --query "stageStates[].latestExecution.status" --output text) #Gets current pipeline stage states
  currentStageStates=($currentStates)
  len=${#currentStageStates[@]} #Gets number of stages
  for (( i=0; i<len; i++ )); #Loop to check state of each stage.
  do
    s=${currentStageStates[i]};
    if [[ "$s" == InProgress ]]; #Check if the stage state is InProgress
      then
        echo "A stage is in progress, waiting";
        break #Break from this for-loop and sleep for 5 seconds before retrying
      else
        (( a = len - 1)) #Get count of last stage
        if [ $i -eq $a ]  #Check if this is last stage
          then
            echo "Triggering pipeline"
            #Pipeline Triggering code.
            pipelineTriggered=1
          else
            continue
        fi
    fi
  done
  if [ $pipelineTriggered -eq 1 ] #Check if pipeline was trigerred in preceding for-loop.
  then
    break #Break from the while/until loop
  else
    ((tryCount++)) #Incrementing retry count
    sleep 5 #Sleep for 5 seconds before retrying
  fi
done
